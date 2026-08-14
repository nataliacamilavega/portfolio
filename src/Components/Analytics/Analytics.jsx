import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

const MEASUREMENT_ID = "G-BYW0S29YJN";

const isLocalHost = () => {
  const { hostname } = window.location;

  return hostname === "localhost" || hostname === "127.0.0.1";
};

const titlesByPath = (lang) => ({
  "/": lang.pageTitle.about,
  "/studys": lang.pageTitle.studys,
  "/habilities": lang.pageTitle.skills,
  "/freelance": lang.pageTitle.freelance,
  "/projects": lang.pageTitle.projects,
  "/contact": lang.pageTitle.contact,
});

const Analytics = () => {
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => {
    const titles = titlesByPath(theme.lang);
    document.title = titles[location.pathname] || theme.lang.pageTitle.about;
  }, [location.pathname, theme.lang]);

  useEffect(() => {
    if (isLocalHost() || typeof window.gtag !== "function") return;

    const pagePath = `${location.pathname}${location.search}`;

    window.gtag("event", "page_view", {
      send_to: MEASUREMENT_ID,
      page_path: pagePath,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search, theme.lang]);

  return null;
};

export default Analytics;
