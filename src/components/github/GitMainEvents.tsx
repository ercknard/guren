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
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
    url: string;
  };
  public: string;
  created_at: string;
}

const GitFeed: React.FC = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const owner = process.env.GITHUB_USER_NAME || "ercknard";
  const API_URL = process.env.GITHUB_API || "https://api.github.com";

  useEffect(() => {
    const fetchGitHubEvents = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/users/${owner}/events?page=${page}&per_page=5`
        );
        setEvents(response.data);
        // Calculate total pages based on the number of items received and the desired items per page
        const itemsPerPage = 30;
        const totalEventsCount = parseInt(
          response.headers["x-total-count"],
          10
        );

        // Calculate total pages based on the desired items per page (30) and total count
        const calculatedTotalPages = Math.ceil(totalEventsCount / itemsPerPage);

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
          {events.map((event) => (
            <li key={event.id}>
              <Link
                href={`https://github.com/${event.repo.name}`}
                target="_blank"
              >
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
                          src={event.actor.avatar_url}
                          width={210}
                          height={210}
                        />{" "}
                      </AspectRatio>
                    </div>
                  </CardOverflow>
                  <CardContent>
                    <Typography className="sec-title" textColor="primary.200">
                      <span className="text-effect"> Repository: </span>
                      <span className="text-effect">{event.repo.name}</span>
                      <span> ID# {event.id}</span>
                    </Typography>{" "}
                    <Typography
                      className="cryptech-details que"
                      level="body-sm"
                    >
                      {" "}
                      Actor: {event.actor.login}
                    </Typography>
                    <Typography
                      className="cryptech-details que"
                      level="body-sm"
                    >
                      {" "}
                      Event type: {event.type}
                    </Typography>
                    <Typography
                      className="cryptech-details que"
                      level="body-sm"
                    >
                      {" "}
                      Created at: {event.created_at}
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
                    Ercknard Git Events
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

export default GitFeed;
