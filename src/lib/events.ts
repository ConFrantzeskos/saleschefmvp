
// Memory-efficient event listener manager
export class EventManager {
  private listeners = new Map<string, { element: Element; listener: EventListener; options?: boolean | AddEventListenerOptions }[]>();

  add(element: Element, event: string, listener: EventListener, options?: boolean | AddEventListenerOptions) {
    element.addEventListener(event, listener, options);
    
    const key = `${event}`;
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key)!.push({ element, listener, options });
  }

  remove(element: Element, event: string, listener: EventListener) {
    element.removeEventListener(event, listener);
    
    const key = `${event}`;
    const eventListeners = this.listeners.get(key);
    if (eventListeners) {
      const index = eventListeners.findIndex(
        item => item.element === element && item.listener === listener
      );
      if (index > -1) {
        eventListeners.splice(index, 1);
      }
    }
  }

  cleanup() {
    for (const [event, listeners] of this.listeners.entries()) {
      for (const { element, listener } of listeners) {
        element.removeEventListener(event, listener);
      }
    }
    this.listeners.clear();
  }
}
