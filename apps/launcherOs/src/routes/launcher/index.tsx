import LauncherPage from "@/features/launcher/pages/launcher.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/launcher/")({
  component: LauncherPage,
});
