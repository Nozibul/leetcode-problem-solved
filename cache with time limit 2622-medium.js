var TimeLimitedCache = function () {
  this.data = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  this.data.set(key, value);
  const exist = this.data.get(key);
  if (exist) clearTimeout(exist.timer);

  const timer = setTimeout(() => {
    // remove key
    this.data.delete(key);
  }, duration);

  this.data.set(key, { value, timer });

  return Boolean(exist);
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.data.has(key)) {
    return this.data.get(key).value;
  }
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.data.size;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
