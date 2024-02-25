class EventEmitter {
    constructor() {
      this.events = {};
    }

    subscribe(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
  
      this.events[eventName].push(callback);
  
      return {
        unsubscribe: () => {
          this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
      };
    }
  
    emit(eventName, args = []) {
      const callbacks = this.events[eventName] || [];
      const results = callbacks.map(callback => callback(...args));
      return results;
    }
  }
  
  const emitter = new EventEmitter();
  
  function onClickCallback() {return 99; }
  
  const sub = emitter.subscribe('onClick', onClickCallback);
  
  const results = emitter.emit('onClick');
  console.log(results); // Output: [99]
  
  sub.unsubscribe();
  const resultsAfterUnsubscribe = emitter.emit('onClick');
  console.log(resultsAfterUnsubscribe); // Output: []
  