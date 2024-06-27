# Style Utopia

Style Utopia is a simple webstore that allows users to browse, view and add products in a cart.
Deployed project: https://agilo-pre-internship-assignment.vercel.app/

## Time Spent

The first commit was made on June 12th. I dedicated about 2 hours daily to building this project, totaling approximately 30 hours of development time.

## Most Challenging Implementation

The most challenging aspect of this project was dealing with images. Ensuring images were properly displayed and responsive across different devices was difficult. To solve these issues, I used images that had same ratio and implemented them using CSS Flexbox and Grid.

## Implementation You Are Most Proud Of

I am most proud of implementing the carousel for products in the product list. This feature allows users to scroll through product images, enhancing the visual appeal and user experience of the webstore.

## Technologies That I Used
- NextJS
- Tailwind
- Contentful

## Project Structure

```bash
/app
│
├── /[product]                  # Product page
├── /accessories                # Accessories category page
├── /cart                       # Cart page
├── /clothing                   # Clothing category page
├── /services                   # Services that interact with Contentful API (Contentful is Headless CMS used for storing products)
├── /shoes                      # Shoes category page
│
├── /types
│ ├── interfaces                # Interface definitions
│ ├── queries                   # GraphQL queries for /services
│
├── /layout.tsx                 # Layout
├── /not-found.tsx              # Design of 404 page
├── /page.tsx                   # Homepage
│
/components                     # Components implemeted in app pages
├── icons                       # SVG code for icons
```
