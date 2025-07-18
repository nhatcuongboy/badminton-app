"use client";

// Function to format date from ISO string to a more readable format
export function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Function to format time from ISO string to a more readable format
export function formatTime(dateString: string | Date): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Function to calculate duration between two timestamps
export function formatDuration(start: string, end: string): string {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  const durationMinutes = Math.floor((endTime - startTime) / (1000 * 60));
  return `${Math.floor(durationMinutes / 60)}h${durationMinutes % 60}m`;
}

// Function to map SessionStatus from database to UI status
export function mapSessionStatus(
  status: string
): "upcoming" | "in-progress" | "completed" {
  switch (status) {
    case "PREPARING":
      return "upcoming";
    case "IN_PROGRESS":
      return "in-progress";
    case "FINISHED":
      return "completed";
    default:
      return "upcoming";
  }
}

// Function to create a default court name (client-side)
export function getCourtDisplayName(
  courtName?: string,
  courtNumber?: number
): string {
  if (courtName) {
    return courtName;
  }
  if (courtNumber) {
    return `Sân ${courtNumber}`;
  }
  return "Court";
}
