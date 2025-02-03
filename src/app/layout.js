import Sidebar from "@/components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 text-gray-800">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <section className="flex gap-6">
            {/* Dynamic Content */}
            <div className="flex-1">{children}</div>

            {/* Postcard Preview */}
            <div className="w-1/3 bg-white p-4 shadow-md rounded">
              <h2 className="text-xl font-bold mb-4">Postcard Preview</h2>
              <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
                <p className="text-gray-500">
                  Your postcard preview will appear here
                </p>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                Start
              </button>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
