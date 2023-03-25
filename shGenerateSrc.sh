rm -r angular-helper-src
npx create-docusaurus@latest angular-helper-src classic --typescript --skip-install

# ‘-i’ option is used to modify the content of the original file with the replacement string if the search string exists in the file.
# ‘s’ indicates the substitute command.
# ‘search_string’ contains the string value that will be searched in the file for replacement.
# ‘replace_string’ contains the string value that will be used to replace the content of the file that matches the  ‘search_string’ value.
# ‘filename’ contains the filename where the search and replace will be applied.
sed -i'' -e 's/Docusaurus[[:space:]]Tutorial/Instructions/' angular-helper-src/src/pages/index.tsx
sed -i'' -e 's/My[[:space:]]Site/angular-helper/' angular-helper-src/docusaurus.config.js
sed -i'' -e 's/Dinosaurs[[:space:]]are[[:space:]]cool/help for coding automation/' angular-helper-src/docusaurus.config.js
sed -i'' -e 's/My[[:space:]]Project/TCARVI/' angular-helper-src/docusaurus.config.js
sed -i'' -e 's/Tutorial/Instructions/' angular-helper-src/docusaurus.config.js
sed -i'' -e "s/'Blog'/'Analysis'/" angular-helper-src/docusaurus.config.js
sed -i'' -e "s/docusaurus[[:space:]]build/docusaurus build --out-dir ..\/website/" angular-helper-src/package.json
sed -i'' -e "s/docusaurus[[:space:]]build/docusaurus build --out-dir ..\/website/" angular-helper-src/package.json

./shCpdocs.sh
