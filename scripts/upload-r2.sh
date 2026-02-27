#!/bin/bash
BUCKET="retro-game-hub"
PUBLIC_DIR="/Users/anhtv/Downloads/retro-hub-react/public"
CONCURRENT=10
TOTAL=$(find "$PUBLIC_DIR/roms" "$PUBLIC_DIR/images" -type f ! -name '.DS_Store' | wc -l | tr -d ' ')
DONE=0
FAIL=0

echo "📦 Uploading $TOTAL files to R2 bucket '$BUCKET'..."

find "$PUBLIC_DIR/roms" "$PUBLIC_DIR/images" -type f ! -name '.DS_Store' -print0 | while IFS= read -r -d '' file; do
  key="${file#$PUBLIC_DIR/}"

  # Run up to CONCURRENT uploads in parallel
  while (( $(jobs -rp | wc -l) >= CONCURRENT )); do
    sleep 0.2
  done

  (
    if wrangler r2 object put "$BUCKET/$key" --file="$file" --remote 2>/dev/null; then
      :
    else
      echo "  ❌ FAILED: $key" >&2
    fi
  ) &

  DONE=$((DONE + 1))
  if (( DONE % 50 == 0 )); then
    echo "  ⏳ Queued $DONE / $TOTAL..."
  fi
done

# Wait for all background jobs
wait

echo ""
echo "🎉 All $TOTAL files processed!"
