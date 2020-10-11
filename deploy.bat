git add .
set /p commit_msg="Commit message: "
git commit -m "a %commit_msg%"
git push origin main
PAUSE