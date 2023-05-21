import useTitle from "../CustomHooks/useTitle";

const Blog = () => {
    useTitle("Blogs")
    return (
        <div className="bg-white">
            <h3>Question: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p>Answer: An access token is a credential that is used to authenticate and authorize requests to access protected resources on a server. A refresh token is a credential that is used to obtain a new access token without requiring the user to reauthenticate. When a user authenticates, they recieve an access token and refresh token. Since access token is short-lived, refresh tokens are used to reauthenticate after access token expires. Generally on the client-side, the access tokens are typically stored in memory or a secure storage mechanism such as browser cookies or the web storage API (localStorage or sessionStorage). Refresh tokens should be stored in the same way, though not in memory.</p>
            <br />
            <h3>Question: Compare SQL and NoSQL databases?</h3>
            <p>Answer: SQL databases follow a structured, tabular data model where data is organized into tables with predefined schemas, thus relationships between data is rigid. NoSQL databases offer flexible schema designs, allowing for dynamic and unstructured data storage. SQL databases are challenging to scale, whereas NoSQL databases are designed for horizontal scaling and can handle large amounts of data and high traffic loads. SQL specializes in handling structed data while enforcing data integrity and used for  complex queries, transactions, and structured data with well-defined relationships in application such as financial systems or inventory management. On the other hand, NoSQL databases provide more flexibility in handling unstructured and semi-structured data and are suitable for applications with rapidly evolving data structures, large-scale distributed systems, real-time analytics, content management systems, and applications that handle semi-structured or unstructured data.</p>
            <br />
            <h3>Question: What is express js? What is Nest JS (google it)?</h3>
            <p>Answer: Express.js is a minimal and flexible backend web application framework written in JavaScript for Node.js designed to build RESTful API's web applications cross-platform mobile apps quickly and easily by providing broad features.
                Nest.js, on the other hand, is a framework for efficient, scalable and enterprise level backend applications using Node.js. It is written in JavaScript and TypeScript, thus allowing highly testable, maintainable, and scalable applications.
            </p>
            <br />
            <h3>Question: What is MongoDB aggregate and how does it work (google it)?</h3>
            <p>Answer: MongoDB's aggregate method defines a pipeline of stages. In each stage of the pipeline applies operations for allows for advanced data processing and analysis such as filtering, grouping, and sorting to the input documents. After the completing all the stages, the transformed and summarized output is then returned based of the computations done on the documents in each stage and providing a powerful way to derive insights and perform complex computations on data stored in MongoDB collections.
            </p>
            <br />
        </div>
    );
};

export default Blog;