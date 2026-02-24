import { useState, useEffect } from "react";
import type {
  Project,
  GithubStats,
  TopLang,
  GithubRepoResponse,
  GithubUserResponse,
} from "../types";

export const useGithubData = () => {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [githubStats, setGithubStats] = useState<GithubStats>({
    repos: 0,
    followers: 0,
    topLangs: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/0x440hz");
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData: GithubUserResponse = await userRes.json();

        const reposRes = await fetch(
          "https://api.github.com/users/0x440hz/repos?per_page=100&sort=pushed",
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const reposData: GithubRepoResponse[] = await reposRes.json();

        const langCounts: Record<string, number> = {};
        let totalLangs = 0;

        reposData.forEach((repo) => {
          if (repo.language && !repo.fork) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            totalLangs++;
          }
        });

        const topLangs: TopLang[] = Object.entries(langCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100),
          }));

        setGithubStats({
          repos: userData.public_repos,
          followers: userData.followers,
          topLangs: topLangs,
        });

        const formattedProjects: Project[] = reposData
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            name: repo.name,
            desc: repo.description || "No description provided.",
            link: repo.html_url,
            tags: repo.language ? [repo.language] : [],
          }))
          .slice(0, 5);

        setGithubProjects(formattedProjects);
      } catch (err) {
        setError(
          "Failed to load repositories. GitHub API rate limit might be exceeded.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return { githubProjects, githubStats, loading, error };
};
