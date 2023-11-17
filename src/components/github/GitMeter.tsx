import React, { useState, useEffect } from "react";
import axios from "axios";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import Link from "next/link";

interface GitHubEvent {
  date: string;
  name: string;
  html_url: string;
  sha: string;
  commit: {
    committer: {
      date: string;
      name: string;
    };
    message: string;
  };

  author: {
    avatar_url: string;
  };
}

const GitMeter: React.FC = () => {
  const [commits, setCommits] = useState<GitHubEvent[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const owner = process.env.GITHUB_USER_NAME || "ercknard";
  const API_URL = process.env.GITHUB_API || "https://api.github.com";
  const repo = "MaysiloMeter";

  useEffect(() => {
    const fetchGitHubEvents = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/repos/${owner}/${repo}/commits?page=${page}&per_page=5`
        );
        setCommits(response.data);
        // Calculate total pages based on the number of items received and the desired items per page
        const itemsPerPage = 30;
        const totalCommitsCount = parseInt(
          response.headers["x-total-count"],
          10
        );

        // Calculate total pages based on the desired items per page (30) and total count
        const calculatedTotalPages = Math.ceil(
          totalCommitsCount / itemsPerPage
        );

        console.log("Calculated Total Pages:", calculatedTotalPages);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error("Error fetching GitHub events:", error);
      }
    };

    fetchGitHubEvents();
  }, [page]);

  const handleNextPage = () => {
    // Increment the page only when there is a next page
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  console.log("Current Page:", page);
  console.log("Total Pages:", totalPages);

  return (
    <>
      <div className="to-width-git">
        <ul>
          {commits.map((commit) => (
            <li key={commit.sha}>
              <Link href={commit.html_url} target="_blank">
                <Card
                  className="security-card to-width-git-1 git-button"
                  orientation="horizontal"
                  variant="outlined"
                  sx={{ width: 260 }}
                >
                  <CardOverflow>
                    <div className="to-hide project-logo">
                      <AspectRatio ratio="1" sx={{ width: 185 }}>
                        <Image
                          alt="Avatar"
                          src={commit.author.avatar_url}
                          width={210}
                          height={210}
                        />{" "}
                      </AspectRatio>
                    </div>
                  </CardOverflow>
                  <CardContent>
                    <Typography className="sec-title" textColor="primary.200">
                      <span className="text-effect"> Repository: </span>
                      <span className="text-effect">MaysiloMeter</span>
                      <span> ID# {commit.sha.substring(0, 7)}...</span>
                    </Typography>{" "}
                    <Typography
                      className="cryptech-details que"
                      level="body-sm"
                    >
                      {" "}
                      Committer: {commit.commit.committer.name}
                    </Typography>
                    <Typography
                      className="cryptech-details que"
                      level="body-sm"
                    >
                      {" "}
                      Message: {commit.commit.message}
                    </Typography>
                    <Typography
                      className="cryptech-details que"
                      level="body-sm"
                    >
                      {" "}
                      Created at: {commit.commit.committer.date}
                    </Typography>
                  </CardContent>
                  <CardOverflow
                    variant="soft"
                    className="card-promo"
                    sx={{
                      px: 0.2,
                      writingMode: "vertical-rl",
                      textAlign: "center",
                      fontSize: "xs",
                      fontWeight: "xl",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      borderLeft: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    {repo}
                  </CardOverflow>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>&nbsp; | &nbsp; {`page ${page}`} &nbsp; | &nbsp;</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
};

export default GitMeter;
