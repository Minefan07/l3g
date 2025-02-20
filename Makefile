.PHONY: deploy

RSYNC_SERVER="web@osprey.birb.fr:l3.f5.maatt.fr"

deploy:
	find "$(PWD)/" -type f -name *.html -exec brotli -f -o "{}.br" "{}" \;
	find "$(PWD)/" -type f -name *.css -exec brotli -f -o "{}.br" "{}" \;
	find "$(PWD)/" -type f -name *.js -exec brotli -f -o "{}.br" "{}" \;
	rsync -avrz Caddyfile lower.png style.css style.css.br script.js script.js.br index.html index.html.br $(RSYNC_SERVER) -e 'ssh -p 49002'
clean:
	rm *.br
