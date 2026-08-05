import http.server
import socketserver
import webbrowser
import threading
import os
import sys

PORT = 5000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    # Allow port reuse to prevent address-already-in-use errors
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("\n" + "="*50)
            print("🚀  ElavateX Premium Local Dev Server Active!")
            print(f"📂  Serving folder: {DIRECTORY}")
            print(f"🔗  Local URL:      http://localhost:{PORT}")
            print("💡  Press Ctrl+C to terminate the server.")
            print("="*50 + "\n")
            httpd.serve_forever()
    except Exception as e:
        print(f"❌ Failed to start server: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Open default web browser after 1 second delay
    threading.Timer(1.0, lambda: webbrowser.open(f"http://localhost:{PORT}")).start()
    
    try:
        start_server()
    except KeyboardInterrupt:
        print("\n👋 Server shutdown. See you soon!")
        sys.exit(0)
