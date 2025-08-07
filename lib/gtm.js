export const GTM_ID = 'GTM-WG5JQZ3T';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
