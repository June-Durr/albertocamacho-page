import React from "react";

export const Map = () => {
  return (
    <section class="bg-gray-900 grid gap-12 ">
      <div class="flex justify-center ">
        <div class="overflow-hidden rounded-lg h-96 w-full max-w-7xl">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23748.169092575623!2d-80.1901652019934!3d25.807097529351086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b3fe42f54667%3A0xbdc8f9d3e8d072b2!2s3301%20NE%205th%20Ave%2C%20Miami%2C%20FL%2033137!5e0!3m2!1sen!2sus!4v1723410484332!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
