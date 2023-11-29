const vh = (pixels) => {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const result = (pixels / vh) * 100;

  return `${result.toFixed(2)}vh`;
};
