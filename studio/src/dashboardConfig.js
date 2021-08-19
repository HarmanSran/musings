export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611dbdb6ee2f4461aab48d03",
                  title: "Sanity Studio",
                  name: "musings-studio",
                  apiId: "669aed54-692c-48ca-8a51-e32cdadd2b4a",
                },
                {
                  buildHookId: "611dbdb6a5127c5f0ef970d1",
                  title: "Blog Website",
                  name: "musings-web",
                  apiId: "2e630862-6114-46c4-ac7d-f82c00045825",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/HarmanSran/musings",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://musings-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
