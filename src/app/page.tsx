import HeaderMain from "@/components/HeaderMain";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto w-full ">
        <div className="flex-1 flex items-center justify-center p-4 w-full">
          <main className="w-full">

      
<HeaderMain />
           
Extensions List
            <section>
              <button>All</button>
              <button>Active</button>
              <button>Inactive</button>
            </section>

            {/* <!-- If you plan to use the JSON file to populate the data dynamically, you can delete the content below --> */}

            <section>
              <div>
                <Image src="" alt="" />
                <div>
                  <h4>DevLens</h4>
                  <p>
                    Quickly inspect page layouts and visualize element
                    boundaries.
                  </p>
                </div>
              </div>

              <div>
                <button>Remove</button>

                <button></button>
              </div>
            </section>

            {/* 
  StyleSpy
  Instantly analyze and copy CSS from any webpage element.
  Remove

  SpeedBoost
  Optimizes browser resource usage to accelerate page loading.
  Remove

  JSONWizard
  Formats, validates, and prettifies JSON responses in-browser.
  Remove

  TabMaster Pro
  Organizes browser tabs into groups and sessions.
  Remove

  ViewportBuddy
  Simulates various screen resolutions directly within the browser.
  Remove

  Markup Notes
  Enables annotation and notes directly onto webpages for collaborative debugging.
  Remove

  GridGuides
  Overlay customizable grids and alignment guides on any webpage.
  Remove

  Palette Picker
  Instantly extracts color palettes from any webpage.
  Remove

  LinkChecker
  Scans and highlights broken links on any page.
  Remove

  DOM Snapshot
  Capture and export DOM structures quickly.
  Remove

  ConsolePlus
  Enhanced developer console with advanced filtering and logging.
  Remove */}
          </main>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}
