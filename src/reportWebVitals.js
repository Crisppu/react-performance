import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
   //las funcionalidades o metodos de npm - web-vitals desde la ve 4.2.0 los nombre fueron cambiados por ejemplo onCLS por getCLS etc.
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onLCP(onPerfEntry);
    //onFID(onPerfEntry); en desuso
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;