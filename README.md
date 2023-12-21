# DaisyUI and Shadcn/UI in NextJs

This repository is for the configuration for combining DaisyUI and Shadcn/Ui on NextJs

## Requirements
- atleast Node.js version 18.17

## Installation

### Download Repository

1. Open terminal

2. Go to the directory you want to install the repo

3. Clone this repo
    ```
    git clone https://github.com/derrekdev/daisyui-shadcnui-next.git
    ```

### Copying the files

1. Install Nest.Js(with Typescript) in your directory
   
3. Install DaisyUi and Shadcn/Ui(install with Typescript and CSS Variables) in your project
   
5. Copy the following files in this repository to your project
   - Root Folder
     - tailwind.config.ts

   <br />
   
   - Global CSS file(src/app)
     - global.css

### Updating the code to your file

1. Install Nest.Js(with Typescript) in your directory
   
2. Install DaisyUi and Shadcn/Ui(install with Typescript and CSS Variables) in your project

3. Update the following files in your project
    - tailwind.config.ts
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
