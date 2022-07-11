import React from 'react';
import Link from '@docusaurus/Link';

import KeptnLogo from './KeptnLogo';
import {
  Github,
  Linkedin,
  Slack,
  Twitter,
  Youtube,
} from '@styled-icons/boxicons-logos';

export default function Footer() {
  return (
    <footer className="bg-background-100 py-6 lg:px-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start p-4 md:px-12">
        <div className="flex flex-col items-start space-y-4">
          <Link href="https://keptn.sh/">
            <KeptnLogo className="h-10" />
          </Link>
          <p className="text-sm leading-relaxed text-text-100">
            Initially created by &nbsp;
            <Link
              href="https://www.dynatrace.com/"
              className="text-current hover:no-underline"
            >
              Dynatrace
            </Link>
            <br /> <br />© 2022 The Keptn Authors | Documentation Distributed
            under CC-BY-4.0© 2022 The Linux Foundation. All rights reserved. The
            Linux Foundation has registered trademarks and uses trademarks. For
            a list of trademarks of The Linux Foundation, please see our &nbsp;
            <Link
              href="https://keptn.sh/docs/"
              className="text-current hover:no-underline"
            >
              Trademark Usage
            </Link>
            &nbsp;page.
          </p>
        </div>
        <div className="mt-8 flex w-full flex-col lg:flex-row">
          <div className="flex flex-1 flex-col items-start">
            <div className="flex w-full flex-col items-start space-y-2">
              <p className="m-0 text-sm">
                Keptn integrations translate well-defined CloudEvents into
                proprietary vendor APIs and hide complex automation for advanced
                tasks.
              </p>
              <Link
                href="https://keptn.sh/docs/integrations/"
                className="cursor-pointer rounded-md bg-primary px-8 py-1 text-left text-sm text-white hover:text-gray-300 hover:no-underline"
              >
                Explore more
              </Link>
            </div>

            <div className="mt-8 flex items-center space-x-3 text-text-100">
              <Link
                href="https://github.com/keptn/keptn"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Github className="h-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/keptnproject/"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Linkedin className="h-8" />
              </Link>
              <Link
                href="https://slack.keptn.sh/"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Slack className="h-8" />
              </Link>
              <Link
                href="https://twitter.com/keptnProject"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Twitter className="h-8" />
              </Link>
              <Link
                href="https://www.youtube.com/c/keptn"
                className="inline-flex text-current transition hover:text-primary"
              >
                <Youtube className="h-8" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid flex-1 grid-cols-2 gap-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Sitemap</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link
                    href="https://keptn.sh/why-keptn/"
                    className="text-current hover:no-underline"
                  >
                    Why Keptn?
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://keptn.sh/docs/"
                    className="text-current hover:no-underline"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tutorials.keptn.sh/"
                    className="text-current hover:no-underline"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/keptn-contrib"
                    className="text-current hover:no-underline"
                  >
                    Integration
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-normal text-text-100">Resources</div>
              <ul className="list-none space-y-2 p-0 text-sm">
                <li>
                  <Link
                    href="https://keptn.sh/docs/"
                    className="text-current hover:no-underline"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tutorials.keptn.sh/"
                    className="text-current hover:no-underline"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/keptn/keptn"
                    className="text-current hover:no-underline"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/keptn/keptn/releases/"
                    className="dot-after text-current hover:no-underline"
                  >
                    Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/keptn/keptn/issues"
                    className="text-current hover:no-underline"
                  >
                    Issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://slack.keptn.sh/"
                    className="text-current hover:no-underline"
                  >
                    Slack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
