// ==========================================
// UMSI Career Development - Footer Script
// Auto-updates copyright year and adds interactivity
// ==========================================

// Auto-update copyright year
function updateCopyrightYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Add "Back to Top" button functionality
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Add last updated timestamp (optional - can be static or dynamic)
function updateLastModified() {
  const lastModElement = document.getElementById('lastModified');
  if (lastModElement) {
    const lastMod = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastModElement.textContent = lastMod.toLocaleDateString('en-US', options);
  }
}

// Track footer link clicks (optional analytics placeholder)
function trackFooterLinks() {
  const footerLinks = document.querySelectorAll('footer a');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', function() {
      const linkText = this.textContent.trim();
      const linkHref = this.getAttribute('href');
      
      // Placeholder for analytics tracking
      // console.log('Footer link clicked:', linkText, linkHref);
      
      // You can add Google Analytics or other tracking here
      // Example: gtag('event', 'click', { 'event_category': 'footer', 'event_label': linkText });
    });
  });
}

// Add accessibility enhancement - announce to screen readers when footer links are activated
function enhanceFooterAccessibility() {
  const footerLinks = document.querySelectorAll('footer a[target="_blank"]');
  
  footerLinks.forEach(link => {
    // Add screen reader text for external links
    if (!link.querySelector('.sr-only')) {
      const srText = document.createElement('span');
      srText.className = 'sr-only';
      srText.textContent = ' (opens in new window)';
      link.appendChild(srText);
    }
  });
}

// Initialize all footer functionality when DOM is ready
function initFooter() {
  updateCopyrightYear();
  initBackToTop();
  updateLastModified();
  trackFooterLinks();
  enhanceFooterAccessibility();
  
  // Log to console for debugging
  console.log('Footer initialized successfully');
}

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooter);
} else {
  // DOM already loaded
  initFooter();
}

// Export functions for potential use elsewhere (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    updateCopyrightYear,
    initBackToTop,
    updateLastModified
  };
}