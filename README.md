# DaisyUI and Shadcn/UI in NextJs

This repository provides a practical example for setting up the integration of DaisyUI and Shadcn/Ui components within a Next.js project. It serves as a template for creating a website using Next.js, showcasing the combined capabilities of DaisyUI and Shadcn/ui components for efficient web development.

Check the [Website](https://daisyui-shadcnui-next.vercel.app/)
<br />
## UIs used

- [Next.Js](https://nextjs.org//)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Shadcn/UI](https://ui.shadcn.com/)

  
## Requirements
> [!NOTE]
> This was tested using Typescript, have not yet tested with javascript

- Using this repo
    - atleast Node.js version 18.17
<br />

- Copying the files or codes
    - Check the UI Versions below

## UI Versions
- Tailwind version: 3.3.0
- DaisyUI version: 4.4.20
- Shadcn/UI version: (December 2023)
- Radix UI(Required on Shadcn/UI) version: 2.0.2

## Installation

### A. Download Repository

1. Open terminal

2. Go to the directory you want to install the repo

3. Clone this repo
    ```
    git clone https://github.com/derrekdev/daisyui-shadcnui-next.git
    ```
4. Go to directory src/app and open globals.css
    > If you want to use Neutral base color, you don't have to do this step and step 5.
<br />

5. Uncomment the base color you want
    > Don't forget to comment all the css variablas inside Neutral base color
<br />

### B. Copying the files

1. Install Next.Js(with Typescript) in your directory
   
2. Install DaisyUi and Shadcn/Ui(install with Typescript and CSS Variables) in your project
   
3. Copy the following files in this repository to your project
   - Root Folder
     - tailwind.config.ts

   <br />
   
   - Global CSS file(src/app)
     - global.css
     - Uncomment the base color you want
        > Don't forget to comment all the css variablas inside Neutral base color
<br />

### C. Updating the code to your file

1. Go to you project directory.
   
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
            @apply border-border;
          }
          body {
            @apply text-foreground;
          }
        }
      ```
      > bg-background was removed on body.
