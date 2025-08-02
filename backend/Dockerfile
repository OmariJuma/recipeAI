FROM alpine:3.18.4
# Install Python and other dependencies
RUN apk add --no-cache python3 py3-pip

# Set work directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN python3 -m venv .venv && \
    . .venv/bin/activate && \
    pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port FastAPI will run on
EXPOSE 8000


# Activate venv and run the server
CMD ["/bin/sh", "-c", ". .venv/bin/activate && uvicorn app.main:app --host 0.0.0.0 --port 8000"]
