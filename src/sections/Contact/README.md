# Contact Section Component

A modern, professional contact section for developer portfolios with form validation, quick action buttons, and smooth animations.

## Features

- ✨ **Modern Design**: Clean, professional layout with subtle animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: Full keyboard navigation and screen reader support
- 🔒 **Spam Protection**: Built-in honeypot field for spam prevention
- ✅ **Form Validation**: Real-time validation with error messages
- 🎨 **Customizable**: Easy to customize colors, links, and styling

## Usage

```jsx
import ContactSection from "./sections/Contact/ContactSection";

function App() {
  return (
    <div>
      {/* Other sections */}
      <ContactSection />
    </div>
  );
}
```

## Customization

### Quick Action Links

Update the `quickActions` array in the component to include your actual links:

```jsx
const quickActions = [
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:your.actual@email.com",
    color: "#EA4335",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-actual-profile",
    color: "#0077B5",
  },
  // Add more actions as needed
];
```

### Form Submission

Currently, the form logs data to the console. To connect to a real backend:

1. **EmailJS** (Recommended for simple setups):

   ```jsx
   import emailjs from "@emailjs/browser";

   // In handleSubmit function:
   const result = await emailjs.send(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
     },
     "YOUR_PUBLIC_KEY"
   );
   ```

2. **Formspree** (No backend needed):

   ```jsx
   // Replace the form action
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

3. **Custom Backend**:
   ```jsx
   const response = await fetch("/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   ```

### Styling

The component uses SCSS variables from `src/assets/styles/_variables.scss`. You can customize:

- Colors: `$color-primary`, `$color-surface`, etc.
- Spacing: `$space-16`, `$space-24`, etc.
- Typography: `$font-size-16`, `$fw-bold`, etc.

## Accessibility Features

- ✅ Proper label associations with form inputs
- ✅ Keyboard navigation support
- ✅ Focus indicators for all interactive elements
- ✅ Screen reader friendly error messages
- ✅ High contrast mode support
- ✅ Semantic HTML structure

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Dependencies

- React (with hooks)
- Framer Motion (for animations)
- React Icons (for icons)
- SCSS (for styling)

## File Structure

```
src/sections/Contact/
├── ContactSection.jsx    # Main component
└── ContactSection.scss   # Styles
```
