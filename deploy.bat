set /p commit_msg="Commit message: "
git add .
git commit -m "a %commit_msg%"
git push origin main
PAUSE