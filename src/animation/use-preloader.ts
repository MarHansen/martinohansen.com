import { useSyncExternalStore } from "react";

let done = false;
const listeners = new Set<() => void>();

export function markPreloaderDone() {
  if (done) return;
  done = true;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return done;
}

function getServerSnapshot() {
  return false;
}

export function usePreloaderDone() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
