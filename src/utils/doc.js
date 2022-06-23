export const getDocId = () => {
  const [, doc] = window.location.pathname.split('/');
  if (
    [
      'docs',
      'quickstart',
      'concepts',
      'tutorials',
      'roadmap',
      'integrations',
      'news',
    ].includes(doc)
  )
    return 'default';
  return doc;
};
