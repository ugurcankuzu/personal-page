/** @type {import('next').NextConfig} */
const nextConfigForDev = {}
const nextConfigForProd = {
    output: "export",
    basePath: "/personal-page"    
}

module.exports = process.env.NODE_ENV === "production" ? nextConfigForProd : nextConfigForDev
