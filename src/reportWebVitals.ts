const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals: any) => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB,
              onCLS, onFID, onFCP, onLCP, onTTFB } = webVitals;
      (onCLS || getCLS)?.(onPerfEntry);
      (onFID || getFID)?.(onPerfEntry);
      (onFCP || getFCP)?.(onPerfEntry);
      (onLCP || getLCP)?.(onPerfEntry);
      (onTTFB || getTTFB)?.(onPerfEntry);
    });
  }
};

export default reportWebVitals;
