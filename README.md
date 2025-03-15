# Rwanda Community Health Research Tool

A comprehensive data collection and analysis platform for assessing community knowledge, attitudes, and behaviors related to teenage pregnancy, HIV/AIDS, and gender-based violence in Rwanda.

## Features

- **Data Collection**: Structured surveys for gathering information about:
  - Teenage pregnancy awareness and prevention
  - HIV/AIDS knowledge and testing
  - Gender-based violence reporting and support services

- **Data Analysis**: 
  - Real-time data visualization
  - Interactive charts and maps
  - Statistical analysis by region

- **Reporting**:
  - Automated report generation
  - Export functionality
  - Custom report templates

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Data Visualization**: Chart.js
- **Maps**: Leaflet.js

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd rwanda-research-tool
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Update the `.env` file with your database connection string and other required variables.

4. Set up the database:
```bash
npx prisma migrate dev
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── lib/             # Utility functions and configurations
└── types/           # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Rwanda Ministry of Health
- Local community health workers
- All contributing researchers and developers
