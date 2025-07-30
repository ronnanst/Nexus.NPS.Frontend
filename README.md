# A Nextjs 15 Project

This is a Nextjs 15 project with the React ApexCharts library for the dashboard visualization tool

## Pre-requirements

Before starting, be sure to have installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)

## Installation

1. Clone the repository: `git clone https://github.com/seu-usuario/seu-projeto.git`
2. Browser through the project's directory: `cd your-project`
3. Install all dependencies:: `npm install`

## Starting the Project

To run the project, write the following command:

`npm run dev`

Open your browser and access http://localhost:3000/.

## Libraries

**- ApexCharts**

Interactive charts to create dashboard visualizations. See the documentation here: [https://apexcharts.com/docs/react-charts/] to obtain more information about this package.

## Estrutura do Projeto

rganização por module.

- **Admin**: Para o módulo principal do projeto: Dashboard com a *Árvore de Decomposição*
- **Core**: Para módulos únicos e os services.
- **Features**: Para novas funcionalidades.
- **Shared**: Fica os componentes que aparecem em mais de um arquivo(componentes, diretivas e pipes). 




<h1 align="center">
   <a href="#"> Nexus NPS Project </a>
</h1>

<h3 align="center">
  This applications is responsible to register and monitor Net Promoter Scores (NPS) for the Company.
</h3>

<h4 align="center">
    Status: in development
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#how-to-run">How to Run</a> •
 <a href="#user-management-permissions">User Management Permissions</a> •
 <a href="#how-to-merge">How to Merge</a> •
 <a href="#how-to-deploy">How to Deploy</a>
</p>

## About

Net Promoter Score (NPS) is a customer metric that measures how likely a person is to recommend a product, service or brand. Widely used to assess customer satisfaction and loyalty.

This project aims to facilitate users' visualization of many different products's performance by having quick access of the desired products' NPS value.

## How to run

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:

[Node.js v14.21.3 or newer](https://nodejs.org/en/download/prebuilt-installer/current) and a Package Manager (npm or yarn).

[Visual Studio Code](https://code.visualstudio.com/) (Windows/Linux/MacOs).

### Instalation

1. Clone the repository: `git clone <url>`
3. Install all dependencies: `npm install` in case it fails, add the legacy flag: `npm install --legacy-peer-deps`

### Run Nexus NPS in VsCode or Terminal

```bash
# Access the project folder cmd/terminal or vscode
$ Nexus.NPS.Frontend

# Run the command in the terminal
$ npm run dev

# Access the link by entering the port entered at the time of compilation. Currently the default port is set to 3000
$ http://localhost:[port]/
```