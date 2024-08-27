class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    ['sort', 'page', 'limit'].forEach(el => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj).replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      this.query = this.query.sort(this.queryString.sort.split(',').join(' '));
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  paginate() {
    const page = parseInt(this.queryString.page, 10) || 1;
    const limit = parseInt(this.queryString.limit, 10) || 10;
    this.query = this.query.skip((page - 1) * limit).limit(limit);
    return this;
  }

  search() {
    if (this.queryString.title || this.queryString.author) {
      const title = this.queryString.title ? { title: { $regex: this.queryString.title, $options: 'i' } } : {};
      const author = this.queryString.author ? { author: { $regex: this.queryString.author, $options: 'i' } } : {};
      this.query = this.query.find({ ...title, ...author });
    }
    return this;
  }
}

module.exports = ApiFeatures;
