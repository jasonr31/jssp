(function () {
  const IMAGE_WIDTH_PERCENT = "100%";   // change to your desired width %
  const IMAGE_HEIGHT_PERCENT = "auto";  // keeps aspect ratio

  function applyPercentageSizing(wrapper) {
    // Override the wrapper div sizing
    wrapper.style.width = IMAGE_WIDTH_PERCENT;
    wrapper.style.height = IMAGE_HEIGHT_PERCENT;
    wrapper.style.maxWidth = "100%";

    // Override the thumbnail img sizing
    const img = wrapper.querySelector(".file-thumbnail");
    if (img) {
      img.style.width = IMAGE_WIDTH_PERCENT;
      img.style.height = IMAGE_HEIGHT_PERCENT;
      img.style.maxWidth = "100%";
    }

    // Override the table cell that K2 also sizes in pixels
    const cell = wrapper.querySelector(".file-tn-cell");
    if (cell) {
      cell.style.width = IMAGE_WIDTH_PERCENT;
      cell.style.height = IMAGE_HEIGHT_PERCENT;
    }
  }

  function observeImagePanel(panelId) {
    const wrapper = document.getElementById(panelId);
    if (!wrapper) return;

    // Apply immediately in case image is already loaded
    applyPercentageSizing(wrapper);

    // Watch for K2 re-applying pixel styles after upload
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          applyPercentageSizing(wrapper);
        }
      });

      // Also watch child nodes for the img style being reset
      const img = wrapper.querySelector(".file-thumbnail");
      if (img) {
        applyPercentageSizing(wrapper);
      }
    });

    observer.observe(wrapper, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ["style"],
    });
  }

  // Run after DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    // Target your specific panel by its ID
    observeImagePanel(
      "00000000-0000-0000-0000-000000000000_c55f2682-2192-aff7-261a-cce010c7eb80_ImagePanel"
    );
  });
})();
