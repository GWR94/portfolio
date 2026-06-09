import { useSyncExternalStore } from "react";
import {
  desktopGraphMetrics,
  mobileGraphMetrics,
  type GraphMetrics,
} from "../layout";

const MD_MEDIA_QUERY = "(min-width: 768px)";

const subscribe = (onStoreChange: () => void) => {
  const mq = window.matchMedia(MD_MEDIA_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
};

const getSnapshot = (): GraphMetrics =>
  window.matchMedia(MD_MEDIA_QUERY).matches
    ? desktopGraphMetrics
    : mobileGraphMetrics;

const getServerSnapshot = (): GraphMetrics => mobileGraphMetrics;

export const useTimelineGraphMetrics = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
