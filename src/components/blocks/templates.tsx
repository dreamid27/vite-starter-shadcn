import React from "react";
import { Bookmark, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";

type Tool = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: string;
  category: string;
  icon: string;
  isComingSoon: boolean;
};

const tools: Tool[] = [
  {
    id: 1,
    name: "n8n",
    description:
      "Workflow automation tool with 200+ integrations. Similar to Zapier",
    tags: ["automation", "integration", "workflow"],
    price: "Rp. 150.000/month",
    category: "Productivity",
    icon: "⚙️",
    isComingSoon: false,
  },
  {
    id: 2,
    name: "Figma",
    description:
      "Collaborative interface design tool with real-time collaboration",
    tags: ["design", "ui/ux", "prototyping"],
    price: "Rp. 200.000/month",
    category: "Design",
    icon: "🎨",
    isComingSoon: false,
  },
  {
    id: 3,
    name: "Notion",
    description: "All-in-one workspace for notes, docs, and project management",
    tags: ["productivity", "docs", "collaboration"],
    price: "Rp. 100.000/month",
    category: "Productivity",
    icon: "📝",
    isComingSoon: false,
  },
  {
    id: 4,
    name: "Vercel",
    description: "Cloud platform for static sites and serverless functions",
    tags: ["hosting", "deployment", "serverless"],
    price: "Free - Rp. 300.000/month",
    category: "Development",
    icon: "▲",
    isComingSoon: true,
  },
  {
    id: 5,
    name: "Linear",
    description: "The issue tracking tool you'll enjoy using",
    tags: ["project-management", "issues", "roadmap"],
    price: "Free - Rp. 250.000/month",
    category: "Productivity",
    icon: "📊",
    isComingSoon: true,
  },
  {
    id: 6,
    name: "Supabase",
    description: "Open source Firebase alternative with Postgres",
    tags: ["database", "auth", "storage"],
    price: "Free - Rp. 350.000/month",
    category: "Development",
    icon: "🛢️",
    isComingSoon: true,
  },
];

const Templates = () => {
  return (
    <section className="w-full py-12 bg-primary rounded-b pattern-block relative">
      <div className="absolute w-full h-full bg-primary-foreground top-0 z-0 glass-bg"></div>
      <div className="container px-4 mx-auto max-w-5xl z-10 relative ">
        <div className="text-left mb-12 text-white ">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Start with a Ready-to-Deploy Template
          </h2>
          <p className="text-lg max-w-2xl">
            Choose from a variety of pre-built templates. Click "Deploy Now" to
            launch your app instantly.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {tools.map((tool) => (
            <Card
              key={tool.id}
              className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg group relative"
            >
              {tool.isComingSoon && (
                <div className="absolute w-full h-full bg-primary-foreground top-0 z-0 glass-bg flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">
                    Coming Soon
                  </p>
                </div>
              )}
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                    {tool.icon || (
                      <div className="text-2xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-blue-600"
                        >
                          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                          <path d="m3.3 7 8.7 5 8.7-5"></path>
                          <path d="M12 22V12"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {tool.category}
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tool.name}
                  </h3>
                  <div className="flex items-center space-x-1.5">
                    <a
                      href={`https://github.com/username/${tool.name.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      aria-label={`View ${tool.name} on GitHub`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                    <a
                      href={`https://${tool.name.toLowerCase()}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      aria-label={`Visit ${tool.name} website`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t-[1px] flex lg:flex-col lg:items-start items-center justify-between w-full pt-3.5 gap-2">
                  <p className="font-semibold text-sm lg:text-lg">
                    {tool.price}
                  </p>

                  <div className="lg:w-full">
                    <div className="bg-foreground/10 rounded-[14px] border lg:w-full ">
                      <Button
                        size="sm"
                        className="rounded-xl w-full cursor-pointer"
                      >
                        Deploy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
