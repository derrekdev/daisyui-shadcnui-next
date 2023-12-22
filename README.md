# DaisyUI and Shadcn/UI in NextJs

This repository is for the configuration for combining DaisyUI and Shadcn/Ui on NextJs

## Requirements
- atleast Node.js version 18.17

## UIs used

- [Next.Js](https://nextjs.org//)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

## UI Versions
- Tailwind version: 3.3.0
- DaisyUI version: 4.4.20
- Shadcn/UI version: (July 2023)
- Radix UI(Required on Shadcn/UI) version: 2.0.2

## Installation

### A. Download Repository

1. Open terminal

2. Go to the directory you want to install the repo

3. Clone this repo
    ```
    git clone https://github.com/derrekdev/daisyui-shadcnui-next.git
    ```
<br />

### B. Copying the files

1. Install Next.Js(with Typescript) in your directory
   
3. Install DaisyUi and Shadcn/Ui(install with Typescript and CSS Variables) in your project
   
5. Copy the following files in this repository to your project
   - Root Folder
     - tailwind.config.ts

   <br />
   
   - Global CSS file(src/app)
     - global.css
<br />

### C. Updating the code to your file

1. Install Next.Js(with Typescript) in your directory
   
2. Install DaisyUi and Shadcn/Ui(install with CSS Variables) in your project

3. Update the following files in your project
    - tailwind.config.ts/tailwind.config.js
       ```
       /** @type {import('tailwindcss').Config} */
       module.exports = {
         ...
         plugins: [require("tailwindcss-animate"), require("daisyui")],
       }
       ```
  
    - global.css
      ```
      ...
      
        @layer base {
          * {
            @apply border-border p-0 m-0;
          }
          body {
            @apply text-foreground;
          }
        }
      ```
