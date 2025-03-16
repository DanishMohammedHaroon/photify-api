Backend API for Delaunay Tessellator 🚀

This API is the powerhouse behind the Delaunay Tessellator, enabling seamless image transformation through robust computational geometry. It provides a suite of endpoints designed to handle image uploads, process tessellation based on Delaunay triangulation, and deliver the transformed artwork efficiently.

Key API Endpoints & Features:

Image Upload Endpoint 📤:
Accepts various image formats and performs initial validation. This endpoint ensures that the image is properly formatted and ready for processing.

Tessellation Processing Endpoint 🔺:
Leverages Delaunay triangulation to generate a low-poly version of the uploaded image. Customizable parameters such as point density and color interpolation can be passed as query parameters or JSON payloads for tailored output.

Configuration & Customization 🎛️:
Provides options to fine-tune the tessellation process. Users can adjust settings like edge detection thresholds, vertex count, and color blending to achieve the desired aesthetic.

Result Retrieval Endpoint 🖼️:
Once processing is complete, this endpoint serves the tessellated image. It supports various image formats and quality settings, making it easy to integrate into different workflows.

Error Handling & Logging 🛠️:
Comprehensive error responses and logging ensure that any issues during image processing are captured and communicated, facilitating easier debugging and maintenance.

This API is built with scalability in mind, allowing it to support high volumes of image processing requests while maintaining optimal performance. It's an ideal solution for developers and artists alike who want to integrate cutting-edge image transformation capabilities into their applications.
