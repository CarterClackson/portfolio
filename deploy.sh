# Change directory to the server folder
cd server

# Install Node.js dependencies
npm install

# Go back to the root directory
cd ..

# Create a temporary directory for deployment
deploy_dir=$(mktemp -d)

# Copy only the necessary files for the server to the deployment directory
cp -r server/* $deploy_dir

# Create a zip file for deployment
zip -r release.zip -j $deploy_dir --exclude "frontend/"

# Clean up the temporary deployment directory
rm -rf $deploy_dir

# Print the contents of the zip file (for verification, optional)
unzip -l release.zip

# Start the deployment by copying the zip file to the deployment directory
echo "Deploying..."