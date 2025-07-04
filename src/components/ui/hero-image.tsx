"use client";

export function HeroImage() {
  return (
    <img
      src="/badminton-illustration.svg"
      alt="Badminton Session Management"
      className="max-w-full h-auto"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src =
          "https://placehold.co/600x400/22c55e/ffffff?text=Badminton+Manager";
      }}
    />
  );
}
