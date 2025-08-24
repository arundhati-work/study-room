# Ari's Study Room 📚

A cozy, minimalistic study blog for Computer Science degree notes and Meta interview preparation. Built with Next.js and designed with warm, inviting aesthetics.

![Ari's Study Room](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Design & Aesthetic
- **Lavender-pink pastels** with soft, cozy vibes
- **Clean typography** using Inter font (similar to Redis documentation)
- **Rounded corners** and subtle shadows for warm, inviting feel
- **Cozy study space** aesthetic (not corporate or sterile)

### 📚 Content Organization
- **Categorized notes** with 6 main categories and 24+ subcategories
- **Breadcrumb navigation** for easy navigation
- **Search functionality** across all notes
- **Responsive design** for mobile and desktop

### 💻 Technical Features
- **Code syntax highlighting** optimized for Java
- **LaTeX/MathJax support** for mathematical equations
- **Image lightbox** with zoom and rotation controls
- **Reusable components** for consistent content presentation

### 🗂️ Content Categories
1. **Algorithms & Data Structures** - Core algorithmic concepts
2. **System Design** - Scalable architecture patterns
3. **Databases** - SQL, NoSQL, and optimization
4. **Computer Science** - OS, networks, distributed systems
5. **Meta Interview Prep** - Behavioral, coding, system design
6. **Quick Notes** - Java tips, Git commands, Linux commands

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd study-room
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Icons**: Lucide React
- **Code Highlighting**: React Syntax Highlighter
- **Math Rendering**: KaTeX
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
study-room/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── algorithms/         # Algorithm notes
│   │   ├── system-design/      # System design notes
│   │   ├── databases/          # Database notes
│   │   ├── computer-science/   # CS theory notes
│   │   ├── meta-interview/     # Interview prep
│   │   └── quick-notes/        # Quick reference notes
│   ├── components/             # Reusable components
│   │   ├── Header.tsx         # Site header with search
│   │   ├── Navigation.tsx     # Sidebar navigation
│   │   ├── Breadcrumb.tsx     # Breadcrumb navigation
│   │   ├── CodeBlock.tsx      # Syntax highlighted code
│   │   ├── MathBlock.tsx      # LaTeX equation renderer
│   │   └── Lightbox.tsx       # Image zoom modal
│   └── styles/                # Global styles
├── public/                    # Static assets
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Color Palette
The project uses a custom lavender-pink color scheme defined in `tailwind.config.ts`:

```typescript
colors: {
  lavender: {
    50: '#faf5ff',
    100: '#f3e8ff',
    // ... more shades
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    // ... more shades
  },
  warmGray: {
    50: '#fafaf9',
    100: '#f5f5f4',
    // ... more shades
  }
}
```

### Adding New Content

1. **Create a new note page** in the appropriate category directory
2. **Use the provided components** for consistent styling:
   - `<CodeBlock>` for Java code with syntax highlighting
   - `<MathBlock>` for mathematical equations
   - `<Lightbox>` for images with zoom functionality
   - `<Breadcrumb>` for navigation

3. **Update navigation** in `src/components/Navigation.tsx`

### Example Note Structure
```typescript
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import MathBlock from '@/components/MathBlock';

export default function MyNotePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Breadcrumb items={[...]} />
      
      {/* Content sections */}
      <section className="mb-8">
        <h2>Problem Statement</h2>
        {/* Content */}
      </section>
      
      <CodeBlock language="java">
        {/* Java code */}
      </CodeBlock>
      
      <MathBlock display={true}>
        {/* LaTeX equation */}
      </MathBlock>
    </div>
  );
}
```

## 📝 Content Guidelines

### Writing Notes
- Use clear, concise language
- Include code examples in Java
- Add mathematical equations where relevant
- Provide complexity analysis
- Include practice tips and related problems

### Code Examples
- Use the `<CodeBlock>` component with `language="java"`
- Include file names and titles for context
- Add comments explaining the approach
- Show multiple solutions when applicable

### Mathematical Content
- Use `<MathBlock>` for inline and display equations
- Write clear LaTeX syntax
- Provide context for mathematical concepts

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent component structure
- Follow the established color scheme

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 About

**Ari's Study Room** is a personal study blog created by Arundhati for organizing Computer Science notes and Meta interview preparation materials. The goal is to create a warm, inviting space that makes studying feel cozy rather than corporate or sterile.

---

Made with 💜 by Arundhati
