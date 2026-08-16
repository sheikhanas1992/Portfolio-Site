<?php
echo "<h1>PHP is running</h1>";
echo "<p>Version: " . phpversion() . "</p>";
echo "<p>OpenSSL: " . (extension_loaded('openssl') ? 'yes' : 'no') . "</p>";
?>
