# Style Utopia

## Short Description

Style Utopia is a simple webstore that allows users to browse, view and add products in a cart.

## Time Spent

The first commit was made on June 12th. I dedicated 2-3 hours daily to building this project, totaling approximately 30 hours of development time.

## Most Challenging Implementation

The most challenging aspect of this project was dealing with images. Ensuring images were properly displayed and responsive across different devices was difficult. To solve these issues, I used images that had the same ratio and implemented them using CSS Flexbox and Grid.

## Implementation You Are Most Proud Of

I am most proud of implementing the product carousel. This feature allows users to scroll through product images, enhancing the visual appeal and user experience of the webstore.

## Project Structure

/app
│
├── /[product]                  # Product page
├── /accessories                # Accessories category page
├── /cart                       # Cart page
├── /clothing                   # Clothing category page
├── /services                   # Service to interact with Contentful API
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

