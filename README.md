# Micro-Frontends with Webpack 5 and Module Federation

## Introduction

This project demonstrates a simple implementation of micro-frontends using Webpack 5's Module Federation plugin. It showcases how to split a web application into smaller, independent pieces that work together seamlessly.

### What are Micro-Frontends?

Micro-frontends are an architectural approach where a web application is composed of smaller, semi-independent "micro apps" working loosely together. This approach can be compared to building with Lego blocks, where each block is separate but can be combined to create something larger.

### Why Use Micro-Frontends?

1. **Easier Management**: Different teams can work on separate parts without interference.
2. **Faster Updates**: Parts of the application can be updated independently.
3. **Technology Flexibility**: Different technologies can be used for different parts if needed.
4. **Reusability**: Components can be reused across different projects or parts of the application.

## Project Overview

This project consists of two applications:

1. **Remote App**: A simple app that exposes a button component.
2. **Container App**: The main app that imports and displays the button from the remote app.

## Prerequisites

- Node.js (v12 or later recommended)
- npm (v6 or later)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/thesyntaxdiaries/micro-frontends.git
   cd micro-frontends-webpack5
   ```

2. Install dependencies for both apps:
   ```
   cd remote && npm install
   cd ../container && npm install
   ```

## Project Structure

```
micro-frontends-webpack5/
├── remote/
│   ├── src/
│   │   ├── Button.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── webpack.config.js
└── container/
    ├── src/
    │   ├── App.js
    │   └── index.js
    ├── public/
    │   └── index.html
    ├── package.json
    └── webpack.config.js
```

## Running the Applications

1. Start the remote app:
   ```
   cd remote
   npx webpack serve
   ```
   The remote app will be available at `http://localhost:3001`

2. In a new terminal, start the container app:
   ```
   cd container
   npx webpack serve
   ```
   The container app will be available at `http://localhost:3000`

3. Open `http://localhost:3000` in your browser to see the container app importing and using the button from the remote app.

## Key Concepts

- **Module Federation**: A Webpack 5 feature that allows sharing JavaScript modules between different applications at runtime.
- **Remote App**: Exposes components or modules to be used by other applications.
- **Container App**: Consumes components or modules from remote applications.

## Troubleshooting

If you encounter issues:
- Ensure all files are in the correct locations.
- Verify that all required packages are installed.
- Check that both apps are running (you should see successful webpack compilation messages).
- If you make code changes, you may need to restart the servers.

## Conclusion

This project demonstrates a basic implementation of micro-frontends. While simple, it illustrates the core concepts that can be expanded to build large, complex web applications with improved manageability and flexibility.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
