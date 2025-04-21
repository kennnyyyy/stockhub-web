import { useRef, useEffect } from 'react';

function EmbeddedForm() {
  const context = useRef(null);

  // Function to load the Feathery script dynamically
  const loadFeatheryScriptFromCDN = () =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@feathery/react@latest/umd/index.js';
      script.async = true;
      script.defer = true;
        
      script.onload = () => {
        if (window.Feathery) {
          resolve();
        } else {
          reject(new Error('Feathery did not initialize properly.'));
        }
      };

      script.onerror = () => {
        reject(new Error('Feathery script failed to load.'));
      };

      document.body.appendChild(script);
    });

  // Function to initialize Feathery
  const initializeFeathery = async () => {
    if (!window.Feathery) {
      await loadFeatheryScriptFromCDN();
    }

    // Initialize the Feathery SDK
    window.Feathery.init('a71df81b-be0e-4621-a322-17603bc1e0c3'); // Replace with your SDK key and email
  };

  // Function to render the Feathery form
  const renderFeatheryForm = async () => {
    await initializeFeathery();

    window.Feathery.renderAt(
      'feathery-form', // The ID of the container where the form will be rendered
      {
        formId: 'o2WDkw', // Replace with your form ID
        onLoad: (formContext) => {
          context.current = formContext;
          console.log('Form loaded:', formContext); // Log the form context when the form is loaded
        },
        onAction: (formContext) => {
          context.current = formContext;
          console.log('Form action triggered:', formContext); // Log the form context on actions
        },
      },
      false // Set to `true` if you want to replace the container's content
    );
  };

  // UseEffect to render the form when the component mounts
  useEffect(() => {
    renderFeatheryForm().catch((error) => {
      console.error('Error initializing Feathery:', error);
    });
  }, []);

  return (
    <div>
      {/* Container where the Feathery form will be rendered */}
      <div id="feathery-form"></div>
    </div>
  );
}

export default EmbeddedForm;