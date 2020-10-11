git add .
set /p commit_msg="Commit message: "
git commit -m "%commit_msg%"
git push origin main
PAUSE