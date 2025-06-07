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
  icon: string; // URL to the icon image
  github: string;
  website: string;
  isComingSoon: boolean;
};

const tools: Tool[] = [
  {
    id: 1,
    name: "n8n",
    description:
      "Workflow automation tool with 200+ integrations. Similar to Zapier",
    tags: ["automation", "integration"],
    price: "Rp. 15.000/month",
    category: "Productivity",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg",
    github: "https://github.com/n8n-io/n8n",
    website: "https://n8n.io",
    isComingSoon: false,
  },
  {
    id: 2,
    name: "Activepieces",
    description:
      "Open source workflow automation tool with hundreds of integrations. An alternative to Zapier.",
    tags: ["Automation", "Integration", "Open Source"],
    price: "Rp 85.000/month",
    category: "Productivity",
    icon: "https://avatars.githubusercontent.com/u/99494700?s=280&v=4",
    github: "https://github.com/activepieces/activepieces",
    website: "https://www.activepieces.com",
    isComingSoon: false,
  },
  {
    id: 3,
    name: "WAHA Plus Cloud",
    description:
      "Self-hosted WhatsApp HTTP API (REST API) for unlimited sessions, multimedia messages, and built-in security, enabling seamless WhatsApp automation.",
    tags: ["WhatsApp API", "Messaging", "Self-hosted"],
    price: "Rp. 20.000/month",
    category: "Communication",
    icon: "https://waha.devlike.pro/images/logo.svg",
    github: "https://github.com/devlikepro/WAHA",
    website: "https://waha.devlike.pro",
    isComingSoon: false,
  },
  {
    id: 4,
    name: "Vercel",
    description: "Cloud platform for static sites and serverless functions",
    tags: ["hosting", "deployment", "serverless"],
    price: "Free - Rp. 300.000/month",
    category: "Development",
    icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    github: "https://github.com/vercel/vercel",
    website: "https://vercel.com",
    isComingSoon: true,
  },
  {
    id: 5,
    name: "Linear",
    description: "The issue tracking tool you'll enjoy using",
    tags: ["project-management", "issues", "roadmap"],
    price: "Free - Rp. 250.000/month",
    category: "Productivity",
    icon: "https://linear.app/icons/icon-192x192.png",
    github: "https://github.com/linear/linear",
    website: "https://linear.app",
    isComingSoon: true,
  },
  {
    id: 6,
    name: "Supabase",
    description: "Open source Firebase alternative with Postgres",
    tags: ["database", "auth", "storage"],
    price: "Free - Rp. 350.000/month",
    category: "Development",
    icon: "https://supabase.com/favicon.ico",
    github: "https://github.com/supabase/supabase",
    website: "https://supabase.com",
    isComingSoon: true,
  },
];

const Templates = () => {
  return (
    <section className="w-full py-12 bg-primary rounded-b pattern-block relative">
      <div className="absolute w-full h-full bg-black/60 top-0 z-0"></div>
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
                    <img
                      src={tool.icon}
                      alt={tool.name + " logo"}
                      className="object-contain w-10 h-10"
                      loading="lazy"
                    />
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
                      href={tool.github}
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
                      href={tool.website}
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
