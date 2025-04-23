'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="error">
      <h2>Couldn't load product</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
